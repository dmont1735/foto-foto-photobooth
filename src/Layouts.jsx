const LAYOUTS = {
  A: {
  index: 0,
  name: "A",
  grid: "1x3",
  xSize: 1,
  ySize: 3,
  totalSlots: 3,
  type: "vertical",
  style: {
    display: "grid",
    gridTemplateColumns: `repeat(1, 250px)`,
    gridTemplateRows: `repeat(3, 190px)`,
    gap: "25px",
    width: "300px",
    height: "900px",
    margin: "0 auto",
    justifyContent: "center",
    alignContent: "center",
    justifyItems: "center",
    alignItems: "center",
    border: "1px solid #000",
    padding: "40px 30px 70px", // extra bottom space for logo
    borderRadius: "20px",
    boxSizing: "border-box",
    background: "#4c69ec",
    boxShadow: "0 0 10px rgba(0,0,0,0.15)",
  },
  slotStyle: {
    width: "100%",
    height: "100%",
    border: "3px solid #fff",
    borderRadius: "10px",
    overflow: "hidden",
    backgroundColor: "#f5f5f5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  imgStyle: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
},

B: {
  index: 1,
  name: "B",
  grid: "1x4",
  xSize: 1,
  ySize: 4,
  totalSlots: 4,
  type: "vertical",
  style: {
    display: "grid",
    gridTemplateColumns: `repeat(1, 240px)`,
    gridTemplateRows: `repeat(4, 160px)`,
    gap: "25px",
    width: "300px",
    height: "950px",
    margin: "0 auto",
    justifyContent: "center",
    alignContent: "center",
    justifyItems: "center",
    alignItems: "center",
    border: "1px solid #000",
    padding: "40px 30px 70px",
    borderRadius: "20px",
    boxSizing: "border-box",
    background: "#ec944c",
    boxShadow: "0 0 10px rgba(0,0,0,0.15)",
  },
  slotStyle: {
    width: "100%",
    height: "100%",
    border: "3px solid #fff",
    borderRadius: "10px",
    overflow: "hidden",
    backgroundColor: "#f5f5f5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  imgStyle: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
},

C: {
  index: 2,
  name: "C",
  grid: "2x2",
  xSize: 2,
  ySize: 2,
  totalSlots: 4,
  type: "vertical",
  style: {
    display: "grid",
    gridTemplateColumns: `repeat(2, 210px)`,
    gridTemplateRows: `repeat(2, 210px)`,
    gap: "30px",
    width: "500px",
    height: "700px",
    margin: "0 auto",
    justifyContent: "center",
    alignContent: "center",
    justifyItems: "center",
    alignItems: "center",
    border: "1px solid #000",
    padding: "40px 30px 60px",
    borderRadius: "20px",
    boxSizing: "border-box",
    background: "#23ca3f",
    boxShadow: "0 0 10px rgba(0,0,0,0.15)",
  },
  slotStyle: {
    width: "100%",
    height: "100%",
    border: "3px solid #fff",
    borderRadius: "10px",
    overflow: "hidden",
    backgroundColor: "#f5f5f5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  imgStyle: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
},

D: {
  index: 3,
  name: "D",
  grid: "2x3",
  xSize: 2,
  ySize: 3,
  totalSlots: 6,
  type: "vertical",
  style: {
    display: "grid",
    gridTemplateColumns: `repeat(2, 180px)`,
    gridTemplateRows: `repeat(3, 150px)`,
    gap: "25px",
    width: "450px",
    height: "750px",
    margin: "0 auto",
    justifyContent: "center",
    alignContent: "center",
    justifyItems: "center",
    alignItems: "center",
    border: "1px solid #000",
    padding: "40px 30px 70px",
    borderRadius: "20px",
    boxSizing: "border-box",
    background: "#fa2f2f",
    boxShadow: "0 0 10px rgba(0,0,0,0.15)",
  },
  slotStyle: {
    width: "100%",
    height: "100%",
    border: "3px solid #fff",
    borderRadius: "10px",
    overflow: "hidden",
    backgroundColor: "#f5f5f5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  imgStyle: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
},

E: {
  index: 4,
  name: "E",
  grid: "3x1",
  xSize: 3,
  ySize: 1,
  totalSlots: 3,
  type: "horizontal",
  style: {
    display: "grid",
    gridTemplateColumns: `repeat(3, 160px)`,
    gridTemplateRows: `repeat(1, 180px)`,
    gap: "25px",
    width: "600px",
    height: "300px",
    margin: "0 auto",
    justifyContent: "center",
    alignContent: "center",
    justifyItems: "center",
    alignItems: "center",
    border: "1px solid #000",
    padding: "30px 30px 50px",
    borderRadius: "20px",
    boxSizing: "border-box",
    background: "#f86ad5",
    boxShadow: "0 0 10px rgba(0,0,0,0.15)",
  },
  slotStyle: {
    width: "100%",
    height: "100%",
    border: "3px solid #fff",
    borderRadius: "10px",
    overflow: "hidden",
    backgroundColor: "#f5f5f5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  imgStyle: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
},

F: {
  index: 5,
  name: "F",
  grid: "4x1",
  xSize: 4,
  ySize: 1,
  totalSlots: 4,
  type: "horizontal",
  style: {
    display: "grid",
    gridTemplateColumns: `repeat(4, 130px)`,
    gridTemplateRows: `repeat(1, 150px)`,
    gap: "20px",
    width: "650px",
    height: "275px",
    margin: "0 auto",
    justifyContent: "center",
    alignContent: "center",
    justifyItems: "center",
    alignItems: "center",
    border: "1px solid #000",
    padding: "30px 30px 50px",
    borderRadius: "20px",
    boxSizing: "border-box",
    background:" url('../src/assets/backgrounds/PlaidPink.svg')",
    boxShadow: "0 0 10px rgba(0,0,0,0.15)",
  },
  slotStyle: {
    width: "100%",
    height: "100%",
    border: "3px solid #fff",
    borderRadius: "10px",
    overflow: "hidden",
    backgroundColor: "#f5f5f5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  imgStyle: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
},
    };

const layoutKeys = Object.keys(LAYOUTS);

export const getVerticalLayouts = () => {
  let layouts = [];
  layoutKeys.map(l =>{
    layouts = [...layouts, getLayoutSettings(l)];
  });

  const out = layouts.filter((l)=> l.type ==="vertical");
  return out;
}

export const getHorizontalLayouts = () => {
  let layouts = [];
  layoutKeys.map(l =>{
    layouts = [...layouts, getLayoutSettings(l)];
  });
  const out = layouts.filter((l)=> l.type ==="horizontal");
  return out;
}

export const getAllLayouts = () => {
  let layouts = [];
  layoutKeys.map(l =>{
    layouts = [...layouts, getLayoutSettings(l)];
  });
  return layouts;
}

export const getLayoutSettings = (layoutName = "A") => {
  if(layoutName.includes("layout-preview-")){
    layoutName = layoutName.slice(-1);
  }
  let layout = LAYOUTS[layoutName] || LAYOUTS["A"];
  return layout;
};

export const tweakLayoutSettings = (layout, backgroundPath, backgroundColor, filter, scale) =>{
  const layoutConfig = getLayoutSettings(layout.name);
  const _background = backgroundPath? `url("${backgroundPath}")` : backgroundColor? `${backgroundColor}` : layoutConfig.style.background;
  const _filter = filter? getFilterSettings(filter) : layoutConfig.imgStyle.filter? layoutConfig.imgStyle.filter: "None" ;

  if(scale){
    
  }

  const style = {
    ...layoutConfig.style,
    background: _background,
  };

  const imgStyle = {
    ...layoutConfig.imgStyle,
    filter: _filter,
  }
  const newSettings = {
      ...layoutConfig,
      style,
      imgStyle,
  }
  return(newSettings);
}

export const getFilterSettings=(filter)=>{
  switch (filter){
    case "Black & White":
      return "grayscale(100%) contrast(1.2)";
    case "Sepia":
      return "sepia(0.9) contrast(1.1) brightness(1.05)"
    case "Retro Film":
      return "contrast(1.1) saturate(0.8) brightness(1.05)";
    default:
      return "None";
  }  
}
