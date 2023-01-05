export async function onRequest(context) {
    const test= await context.env.users.get("kro")
    return new Response(test);
}
  
