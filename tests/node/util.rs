use js_sys::Object;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern {
    pub type Require;

    pub static require: Require;

    #[wasm_bindgen(method)]
    pub fn resolve(this: &Require, request: &str, options: Option<Object>) -> String;
}

pub(crate) mod language;
pub(crate) mod parser;
pub(crate) mod syntax_node;
pub(crate) mod tree;
