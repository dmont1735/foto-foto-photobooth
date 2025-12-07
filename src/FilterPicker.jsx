import { getFilterSettings } from "./Layouts";

function FilterPicker({filter, onPickedFilterCallback, direction}){
    return (
        <div className="filter-picker">
            <div className={`filter-options-${direction}`}>
                <button 
                    className={filter===getFilterSettings("None")? "option-button-selected" :"option-button"}
                    onClick={()=>onPickedFilterCallback("None")}>
                    No filter
                </button>
                <button 
                    className={filter===getFilterSettings("Black & White")? "option-button-selected" :"option-button"} 
                    onClick={()=>onPickedFilterCallback("Black & White")}>
                    Black & White
                </button>
                <button 
                className={filter===getFilterSettings("Sepia")? "option-button-selected" :"option-button"}
                onClick={()=>onPickedFilterCallback("Sepia")}>
                    Sepia
                </button>
                <button 
                    className={filter===getFilterSettings("Retro Film")? "option-button-selected" :"option-button"}
                    onClick={()=>onPickedFilterCallback("Retro Film")}>
                    Retro Film
                </button>
            </div>
        </div>
    )
}

export default FilterPicker
