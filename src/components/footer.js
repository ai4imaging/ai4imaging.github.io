import React from "react";

const App = () => {
    return (
        <footer
            className="bg-gray-100 py-3 text-center"
            style={{

                bottom: 0, // 紧贴页面底部
                left: 0, // 从页面最左侧开始
                width: "100%", // 宽度铺满整个页面
            }}
        >
            <p>&copy; Computational Scientific Imaging Lab @ PKU, Since 2022</p>
        </footer>
    );
};

export default App;

