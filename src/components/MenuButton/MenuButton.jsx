

const MenuButton = ({children}) => {
    return (
        <button className="btn btn-outline border-1 border-b-4 mt-4 w-9/12 md:w-auto">
            {children}
        </button>
    );
};

export default MenuButton;