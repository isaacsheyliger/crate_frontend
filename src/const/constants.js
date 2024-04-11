const production = {
    url: 'https://crate.digital',
    api: 'https://crate-labs.com/api',
    blog_url: 'https://blog.crate.digital',
    blog_api: 'https://crate-labs.com/blog',
};

const development = {
    url: 'http://localhost:3000',
    api: 'http://localhost:8080/api',
    blog_url: 'http://blog.test.localhost:3000',
    blog_api: 'http://localhost:8080/blog',
};

export const config = process.env.REACT_APP_STAGE === 'prod' ?  production: development;
