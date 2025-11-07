import connectDB from "@/config/database";
import User from "@/models/User";
import Property from "@/models/Property";
import { auth } from "@/auth";

// GET /api/bookmarks - Get user's bookmarked properties
export const GET = async(req) => {
    try{
        await connectDB();
        
        const session = await auth();
        
        if (!session || !session.user) {
            return new Response("Unauthorized", { status: 401 });
        }
        
        const userId = session.user.id;
        
        const user = await User.findById(userId).populate('bookmarks');
        
        if (!user) {
            return new Response("User not found", { status: 404 });
        }
        
        return new Response(JSON.stringify(user.bookmarks || []), { 
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

// POST /api/bookmarks - Toggle bookmark for a property
export const POST = async(req) => {
    try{
        await connectDB();
        
        const session = await auth();
        
        if (!session || !session.user) {
            return new Response("Unauthorized", { status: 401 });
        }
        
        const { propertyId } = await req.json();
        
        if (!propertyId) {
            return new Response("Property ID is required", { status: 400 });
        }
        
        const userId = session.user.id;
        
        const user = await User.findById(userId);
        
        if (!user) {
            return new Response("User not found", { status: 404 });
        }
        
        const isBookmarked = user.bookmarks.includes(propertyId);
        
        if (isBookmarked) {
            // Remove bookmark
            user.bookmarks = user.bookmarks.filter(
                (id) => id.toString() !== propertyId
            );
        } else {
            // Add bookmark
            user.bookmarks.push(propertyId);
        }
        
        await user.save();
        
        return new Response(JSON.stringify({ 
            isBookmarked: !isBookmarked,
            message: isBookmarked ? "Bookmark removed" : "Bookmark added"
        }), { 
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
