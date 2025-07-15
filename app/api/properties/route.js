import connectDB from "@/config/database";

export const GET = async(req) => {
    try{
        await connectDB();
        return new Response(JSON.stringify({ message: "Hello there" }), { status: 200 })
    }catch(error){
        console.error(error.message);
        return new Response("Something Went Wrong", { status: 500 })
    }
}