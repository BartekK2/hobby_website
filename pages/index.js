// ROOT
import React, { useEffect, useState } from 'react'

// STYLE
import Button from '@mui/material/Button'

// RESPONSIVNES
import useMediaQuery from '@mui/material/useMediaQuery';

function Main() {


  // Responsivnes
  const isPhone = useMediaQuery('(min-width:900px)');

  return (
    <>
      <div style={{ display: "flex", alignItems: "stretch", flexDirection: isPhone ? "row" : "column", flex: '1 1 auto' }} >
        <div style={{ width: isPhone ? "40%" : "100%", marginTop: "auto", padding: "40px", display: "flex", height: "100vh", flexDirection: "column", "justifyContent": "flex-end", alignItems: "baseline" }}>
          <h1>Hobbyist.pl</h1>

          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac ante imperdiet, tempus nunc vel, eleifend est. Curabitur mattis est sed nunc consectetur, id finibus lectus iaculis. Mauris imperdiet fermentum metus, sit amet feugiat libero efficitur eu. Vestibulum vel eros ac tortor aliquam porta non id tortor. Maecenas pulvinar dignissim aug
          </h4>

          <Button variant="contained">
            Utwórz konto
          </Button>
        </div>

        <div style={{ display: isPhone ? 'flex' : "none", alignItems: 'center', justifyContent: 'center', width: "60%" }}><div className="grid">


        </div>
          (mapa która pokazuje losowo osoby)
        </div>
      </div>
    </>
  )
}

export default Main
