import connectDB from "@/config/database";
import Message from "@/models/Message";
import { auth } from "@/auth";

// GET /api/messages - Get all messages for logged in user
export const GET = async(req) => {
    try{
        await connectDB();
        
        const session = await auth();
        
        if (!session || !session.user) {
            return new Response("Unauthorized", { status: 401 });
        }
        
        const userId = session.user.id;
        
        // Get messages where user is the recipient
        const messages = await Message.find({ recipient: userId })
            .sort({ createdAt: -1 })
            .populate('sender', 'name email image')
            .populate('property', 'name');
        
        return new Response(JSON.stringify(messages), { 
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

// POST /api/messages - Send a new message
export const POST = async(req) => {
    try{
        await connectDB();
        
        const session = await auth();
        
        const body = await req.json();
        
        // Basic validation
        const required = ["recipient", "name", "email", "body"];
        for (const field of required) {
            if (!body[field]) {
                return new Response(`${field} is required`, { status: 400 });
            }
        }
        
        // Create message data
        const messageData = {
            recipient: body.recipient,
            name: body.name,
            email: body.email,
            phone: body.phone,
            subject: body.subject,
            body: body.body,
            property: body.property,
        };
        
        // Add sender if user is logged in
        if (session && session.user) {
            messageData.sender = session.user.id;
        }
        
        const message = await Message.create(messageData);
        
        return new Response(JSON.stringify(message), { 
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
