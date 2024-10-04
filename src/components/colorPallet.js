import React from 'react'

export default function colorPallet() {
  return (
    <div>
      <h1 style={{ color: `var(${styles.primaryColor})` }}>Hello World</h1>
      <button className={styles.secondaryColor}>Click Me</button>
    
    </div>
  )
}
