export async function get() {
    return {
        body: JSON.stringify({
            title: 'home'
        }, null, 4)
    };
}
