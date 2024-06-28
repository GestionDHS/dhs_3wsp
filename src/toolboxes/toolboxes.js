export const toolbox = (tipo, configuradorBloques) => {
    return {
        toolbox: configuradorBloques.getToolbox(tipo),
        theme: "themeDH",
        zoom: {
            controls: true,
            wheel: true,
            pinch: true,
        },
        resize: true,
        parentWidth: null,
        parentHeight: null
    }
}
