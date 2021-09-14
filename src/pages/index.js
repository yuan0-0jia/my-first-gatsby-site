// Step 1: Import React. This lets you use JSX inside your .js file.
import * as React from 'react'
/* Step 2: Define your component. Note that your
component name should start with a capital letter. */
const MyComponent = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1>Welcome to my Gatsby site!</h1>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </main>
  )
}
/* Step 3: Export your component so it
can be used by other parts of your app. */
export default MyComponent