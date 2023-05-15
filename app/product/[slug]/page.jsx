const page = ({ params }) => {
    return ( 
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>{'product slug: '+ params.slug}</div>
        </main>
     );
}
 
export default page;