import { useEffect, useState } from "react"

interface ThemeFontProps {
  font: 'Roboto' | 'Poppins'
}


function RobotoLoad() {
  return (
    <>
      <style>
        {`
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
        `}
      </style>
      <style>
        {`
          html,body{
            font-family: 'Roboto', sans-serif;
          }          
        `}
      </style>
    </>
  )
}

function PoppinsLoad() {
  return (
    <>
      <style>
        {`
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
        `}
      </style>
      <style>
        {`
          html,body{
            font-family: 'Poppins', sans-serif;
          }          
        `}
      </style>
    </>
  )
}

export default function ThemeFont({ font = 'Poppins' }: ThemeFontProps) {
  const [isLoadFont, setisLoadFont] = useState(false)

  function loadFont() {

    switch (font) {
      case 'Roboto':
        return RobotoLoad()
      case 'Poppins':
        return PoppinsLoad()
      default:
        return PoppinsLoad()
    }
    /*
    if (font === 'Roboto') {
      return RobotoLoad()
    }
    */
  }


  useEffect(() => {
    setisLoadFont(true);
  }, [])

  /*
  const css = `
          @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
          html, body{
            font - family: 'Poppins', sans-serif;
      }
      `
  */

  return (
    <>
      {
        //isLoadFont && <style>{css}</style>
        isLoadFont && loadFont()
      }
    </>
  )
}

