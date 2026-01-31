

function Home() {
    const imageUrl = "https://bucketofducks730335186499.s3.us-east-1.amazonaws.com/duckbucket.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIA2UC26RZB5ENEFCAC%2F20260131%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260131T061042Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIEVEF3uJKh4J72veEIQPmJpBesHEKZcO%2BMU3drM3cqRgAiAmlQ%2BfEC9NeJiPMS4ZGN1BzJopUKJRYavrTTKLBpuIwirkAgiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDczMDMzNTE4NjQ5OSIMv5TkOALIvMJvtaKLKrgC83Sc4buJc%2FLZwZbs4Mw%2F51S%2FWLMVF0mO4h9d9gQGe2dqOOMnWIOOY3b7ClyY3qT9Mu0AsIOxDd6DMpkTlr27ZUa9Utg0gFZ1vVEo%2BNj1vJ3BnxCrDK02EGs%2BEoJrWO1Umm0fudPBt2hYmO3uLn8jeH8P27vPZYorFqC%2BHzt%2FTEcPX3bpwYDnZREqndbHxTlnFuo%2Fnr%2FlcHswf0SOSGJ6T2sSLpeNvIZmDEicu6qf%2F%2FTl%2B%2BL%2F%2BOHm2l3lEHy3WOXflcTu%2B3%2BGSG5vgDTEPb4hY3VXgKJm9jMySJQnu1IIjV9zDXQW9UFo%2F0sl1wvGDMtoMIKShQrwnya6Tt0MWizQr27oYOYHYoo8MVxRLq4%2FhIzH6uh655GMgCLiSTuWolBdFQgiP84qIDtDDE6x%2B3vtv%2BMVwgSfjRKMMOzz9MsGOq4CZzNnUkWmex915LETyr1wgFoCgINR%2B8yHxkG8SPS239xQbc4LB5cZY4B7V8qQTUf%2Bmzeo1H5LIXqewg6OcAQPwMR%2BdSI9czHIZjzvu08j0jeLlIRKS%2BZQjQz3mwBjkAX8OXE2OVAASUG4sdyV1ebrTaPN9CDGn4iQWmYsUgNLmZcZiDwxivHMWWOQ9M4iLAYfAiI0DEt%2FmYGU%2BYpJzhZXClq9iuBwxSa0LaM2TLzNRDhksL1qB%2FP1xJJmCI1TgeypnTSGcYEAP4QRA2zYvpC5ijsn2z1NQVj%2FiKvZzwlaQKlocRKjeTpTYhx9cThVVtf02ugZq5%2FllRqqoAZdny%2BQsfF3lX5oifZaZTdq%2FCmjBuFrUVq7Ial4RR1PGer7Rfc%2Fe56fhhxDUeQV7YIlQZ4%3D&X-Amz-Signature=e305c45262bfd25968fff9a5780453b40a69a66d16b1506f85a09177440c5e1b&X-Amz-SignedHeaders=host&response-content-disposition=inline";

    return(
        <div>
            <h1>Welcome to the Home Page</h1>
            {imageUrl && <img src={imageUrl} alt="Duck in Bucket" />}
        </div>
    )
}
export default Home;