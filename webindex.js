(async () => {
    const importObject = {
        env: {
            abort(_msg, _file, line, column) {
                console.error("abort called at index.ts:" + line + ":" + column);
            }
        }
    };

   const module = await WebAssembly.instantiateStreaming(
        fetch("build/optimized.wasm"),
        importObject
    );

    const minus = module.instance.exports.minus;
    const div = document.getElementById("div");

    const v1 = 2, v2 = 1;
    div.innerHTML = `${v1} - ${v2} = ${minus(v1, v2)}`;
})()
