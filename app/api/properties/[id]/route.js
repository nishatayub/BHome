import connectDB from "@/config/database";
import Property from "@/models/Property";

// GET /api/properties/:id
export const GET = async(req, { params }) => {
    try{
        await connectDB();
        
        const { id } = await params;
        const property = await Property.findById(id);
        
        if (!property) {
            return new Response("Property Not Found", { status: 404 });
        }
        
        return new Response(JSON.stringify(property), { 
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
