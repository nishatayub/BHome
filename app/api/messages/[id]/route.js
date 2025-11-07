import connectDB from "@/config/database";
import Message from "@/models/Message";
import { auth } from "@/app/api/auth/[...nextauth]/route";

// PUT /api/messages/:id - Mark message as read
export const PUT = async(req, { params }) => {
    try{
        await connectDB();
        
        const session = await auth();
        
        if (!session || !session.user) {
            return new Response("Unauthorized", { status: 401 });
        }
        
        const { id } = await params;
        const body = await req.json();
        
        const message = await Message.findById(id);
        
        if (!message) {
            return new Response("Message not found", { status: 404 });
        }
        
        // Verify user is the recipient
        if (message.recipient.toString() !== session.user.id) {
            return new Response("Unauthorized", { status: 401 });
        }
        
        message.read = body.read !== undefined ? body.read : true;
        await message.save();
        
        return new Response(JSON.stringify(message), { 
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

// DELETE /api/messages/:id - Delete a message
export const DELETE = async(req, { params }) => {
    try{
        await connectDB();
        
        const session = await auth();
        
        if (!session || !session.user) {
            return new Response("Unauthorized", { status: 401 });
        }
        
        const { id } = await params;
        
        const message = await Message.findById(id);
        
        if (!message) {
            return new Response("Message not found", { status: 404 });
        }
        
        // Verify user is the recipient
        if (message.recipient.toString() !== session.user.id) {
            return new Response("Unauthorized", { status: 401 });
        }
        
        await message.deleteOne();
        
        return new Response("Message deleted", { status: 200 });
    }catch(error){
        console.error(error);
        return new Response("Something Went Wrong", { status: 500 });
    }
}
