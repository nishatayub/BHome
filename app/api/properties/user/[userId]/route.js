import connectDB from "@/config/database";
import Property from "@/models/Property";

// GET /api/properties/user/:userId
export const GET = async(req, { params }) => {
    try{
        await connectDB();
        
        const { userId } = await params;
        
        if (!userId) {
            return new Response("User ID is required", { status: 400 });
        }
        
        const properties = await Property.find({ owner: userId });
        
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
