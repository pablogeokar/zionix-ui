import { useEffect, useState } from "react"

export default function ThemeFont() {
  const [loadFont, setLoadFont] = useState(false)

  useEffect(() => {
    setLoadFont(true);
  }, [])

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
      html, body{
        font-family: 'Poppins', sans-serif;
      }      
  `
  return (
    <>
      {
        loadFont && <style>{css}</style>
      }
    </>
  )
}

