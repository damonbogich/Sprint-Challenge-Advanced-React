import {useEffect} from 'react';
import {useLocalStorage2} from './useLocalStorage2';


export const useDarkMode2 = () => {
    
    const [darkMode, setDarkMode] = useLocalStorage2('dark');
   
    useEffect(() => {
       
        if (darkMode === true) {
            document.querySelector('body')
            .classList.add('dark-mode')
        } else{
            document.querySelector('body')
            .classList.remove('dark-mode')
        }
       
    }, [darkMode] )
    return [darkMode, setDarkMode]
    
}