module.exports = {
    generateBuildId: async() => {
        return 'my-build-id'
    },
    images: {
        loader: 'imgix',
        path: 'https://example.com/myaccount/',
    },
    distDir: 'build',
};