let wasm;
export function __wbg_set_wasm(val) {
    wasm = val;
}

/**
*/
export function nop() {
    wasm.nop();
}

