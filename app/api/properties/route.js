import connectDB from "@/config/database";
import Property from "@/models/Property";

// GET /api/properties
export const GET = async(req) => {
    try{
        await connectDB();
        
        const properties = await Property.find({});
        
        return new Response(JSON.stringify(properties), { 
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }catch(error){
        console.error(error);
        return new Response("Something Went Wrong", { status: 500 });
    }
}

// POST /api/properties
export const POST = async (req) => {
    try{
        await connectDB();

        const body = await req.json();

        // Basic validation for required fields
        const required = ["owner", "name", "type", "beds", "baths", "square_feet"];
        for (const field of required) {
            if (body[field] === undefined || body[field] === null || body[field] === "") {
                return new Response(`${field} is required`, { status: 400 });
            }
        }

        // Normalize some fields
        if (typeof body.beds === "string") body.beds = Number(body.beds);
        if (typeof body.baths === "string") body.baths = Number(body.baths);
        if (typeof body.square_feet === "string") body.square_feet = Number(body.square_feet);

        // Ensure rates object exists
        if (!body.rates) {
            body.rates = {};
        }

        const property = await Property.create(body);

        return new Response(JSON.stringify(property), {
            status: 201,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }catch(error){
        console.error(error);
        return new Response("Something Went Wrong", { status: 500 });
    }
}