/** 1 Node - Modules, Components, Hooks, Icons */
import React from "react";
/** 2 App - Components, Hooks */
/** 3 Entities, Stores, Packages, Enums ... */
/**
 * @param {any} initialValue
 * @param {array} deps
 *
 * @return {array|object|string|number}
 */
export function useConst(initialValue, deps = []) {
    const refValue = React.useRef();
    const refDeps = React.useRef(deps);
    if (refValue.current === undefined || JSON.stringify(refDeps.current) !== JSON.stringify(deps)) {
        refDeps.current = deps;
        refValue.current = typeof initialValue === 'function' ? initialValue() : initialValue;
    }
    return refValue.current;
}
