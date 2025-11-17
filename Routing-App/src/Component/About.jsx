import { Suspense } from "react"

function About () {
    return (
        <>
        <h1>This is my About page </h1>
        <Suspense fallback={<h1>Loading...</h1>}></Suspense>
        </>
    )
}

export default About