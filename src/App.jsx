import Photobooth from "./Photobooth.jsx"

function App() {
  return (<Photobooth/>);
  // return (<PhotoframePreview/>);

  
//   const [inputImages, setInputImages] = useState([]);
//   const [selectedLayout, setSelectedLayout] = useState(getLayoutSettings("A"));
//   const [selectedColor, setSelectedColor] = useState("white");
//   const [picOrder, setPicOrder] = useState([]);
//   const [framePics, setFramePics] = useState([]);
//   const [currentStage, setCurrentStage] = useState("Start");
//   const [selectedFilter, setSelectedFilter] = useState("None");

//   // const currentLayout = getLayoutSettings(selectedLayoutName, true);

//   // const handleNextLayout = () => {
//   //   const next = getNextLayout(selectedLayoutName);
//   //   setSelectedLayoutName(next.name);
//   // };

//   // const handlePrevLayout = () => {
//   //   const prev = getPrevLayout(selectedLayoutName);
//   //   setSelectedLayoutName(prev.name);
//   // };

//   const handleColorChange = (color) =>{
//     setSelectedColor((c) => color);
//   }

//   const handlePicOrderChange = (pic) =>{
//     if (picOrder.includes(pic)){
//       setPicOrder(picOrder.filter(p => p!==pic));
//       return;
//     }
//     setPicOrder(p => [...p, pic]);
//   }

//   const handlePicsTakenChange = (pics) =>{
//     setInputImages(pics);
//   }

//   const handleLayoutSelection = (layout) =>{
//     setSelectedLayout(getLayoutSettings(layout));
//   }

//   const handleFilterSelection = (filter) =>{
//     setSelectedFilter(filter);
//   }

//   // let frame
//   // useEffect(()=>{
//   //   frame = (<Photoframe pictures={inputImages} layout={selectedLayout}  backgroundColor={selectedColor} filter={selectedFilter}></Photoframe>);

//   // }, [selectedLayout, selectedFilter, selectedColor]);
//   // const frameRef = useRef(frame);

//   return (
//     <>
//       {/* <LayoutPicker layoutPickedCallback={(lyt) => handleLayoutSelection(lyt)}/> */}
//         <Camera picsTakenCallback={handlePicsTakenChange}/>
//         {/* <ColorPicker colorCallback={(color) => handleColorChange(color)}/> */}
//         {/* <ImageInput onChange={setInputImages}/> */}
//         {/* <div className="filter-selection">
//           <button className="filter-option" onClick={()=>handleFilterSelection("None")}>No filter</button>
//           <button className="filter-option" onClick={()=>handleFilterSelection("Black & White")}>Black & White</button>
//           <button className="filter-option" onClick={()=>handleFilterSelection("Sepia")}>Sepia</button>
//           <button className="filter-option" onClick={()=>handleFilterSelection("Retro Film")}>Retro Film</button>

//         </div> */}
//         {/* <Photoframe pictures={inputImages} layout={selectedLayout}  backgroundColor={selectedColor} selectedFilter={selectedFilter}></Photoframe> */}
//     </>
// )
}

export default App
