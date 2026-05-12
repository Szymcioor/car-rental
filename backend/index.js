export default {
    async fetch(request, env) {
        const url = new URL(request.url);
        const corsHeaders = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
        };

        if (request.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

        // --- TABELA: cars (Pobieranie listy aut) ---
        if (request.method === "GET" && url.pathname === "/") {
            const { results } = await env.DB.prepare("SELECT * FROM cars").all();
            return Response.json(results, { headers: corsHeaders });
        }

        // --- TABELA: bookings (Dodawanie rezerwacji + Mail) ---
        if (request.method === "POST" && url.pathname === "/book") {
            const { car_name, customer_name, phone, rental_date } = await request.json();

            // Zapis do tabeli bookings
            await env.DB.prepare(
                "INSERT INTO bookings (car_name, customer_name, phone, rental_date) VALUES (?, ?, ?, ?)"
            ).bind(car_name, customer_name, phone, rental_date).run();

            // Wysyłka maila (Mailchannels)
            await fetch("https://api.mailchannels.net/tx/v1/send", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({
                    personalizations: [{ to: [{ email: "demszymon8@gmail.com", name: "Admin" }] }],
                    from: { email: "system@carflux.pl", name: "CarFlux System" },
                    subject: `Nowa rezerwacja: ${car_name}`,
                    content: [{
                        type: "text/plain",
                        value: `Klient: ${customer_name}\nTelefon: ${phone}\nAuto: ${car_name}\nData: ${rental_date}`
                    }],
                }),
            });

            return new Response("Rezerwacja zapisana", { status: 201, headers: corsHeaders });
        }

        // --- TABELA: cars (Dodawanie nowego auta przez Admina) ---
        if (request.method === "POST" && url.pathname === "/add-car") {
            const { name, price, image } = await request.json();
            await env.DB.prepare(
                "INSERT INTO cars (name, price, image) VALUES (?, ?, ?)"
            ).bind(name, price, image).run();
            return new Response("Auto dodane do bazy", { status: 201, headers: corsHeaders });
        }

        return new Response("Not Found", { status: 404 });
    }
};