import './loading.css' 
export default function loading() {
    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
            <div className="cube">
                <div className="cube_item cube_x"></div>
                <div className="cube_item cube_y"></div>
                <div className="cube_item cube_y"></div>
                <div className="cube_item cube_x"></div>
            </div>
        </div>
    )
}
