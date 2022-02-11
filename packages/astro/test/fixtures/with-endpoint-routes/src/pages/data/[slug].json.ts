export async function getStaticPaths() {
    return [
        { params: { slug: 'thing3' } },
        { params: { slug: 'thing4' } }
    ];
}

export async function get() {
    return {
        body: JSON.stringify({
            title: 'data [slug]'
        }, null, 4)
    };
}
