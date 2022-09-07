import { createContext, useState } from "react";

export const BottomMenuContext = createContext('')

export const BottomMenuProvider = ({children}) => {
	const [selectItemMenu, setSelectItemMenu] = useState(1)

	return (
		<BottomMenuContext.Provider value={{selectItemMenu, setSelectItemMenu}}>
			{children}
		</BottomMenuContext.Provider>
	)
}

