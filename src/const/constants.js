const production = {
    url: 'https://crate.digital',
    api: 'https://crate.digital/api',
    blog_url: 'https://blog.crate.digital',
    blog_api: 'https://blog.crate.digital/blog',
};

const development = {
    url: 'http://localhost:3000',
    api: 'http://localhost:8080/api',
    blog_url: 'http://blog.test.localhost:3000',
    blog_api: 'http://blog.test.localhost:8080/blog',
};

export const config = process.env.REACT_APP_STAGE === 'prod' ?  production: development;