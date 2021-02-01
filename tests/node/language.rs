use wasm_bindgen::prelude::*;
use wasm_bindgen_test::*;

#[wasm_bindgen_test]
async fn load_bytes() {
    async fn inner() -> Result<(), JsValue> {
        use wasm_bindgen::JsCast;
        use wasm_bindgen_futures::JsFuture;
        use web_tree_sitter_sys::Language;
        let bytes: &[u8] = include_bytes!("../../assets/tree-sitter-javascript.wasm");
        let language = JsFuture::from(Language::load_bytes(&bytes.into())).await?;
        language.unchecked_into::<Language>();
        Ok(())
    }
    assert!(inner().await.is_ok());
}

#[wasm_bindgen_test]
async fn load_path() {
    async fn inner() -> Result<(), JsValue> {
        crate::util::parser::init().await?;
        crate::util::language::load().await?;
        Ok(())
    }
    assert!(inner().await.is_ok());
}

#[wasm_bindgen_test]
async fn version() {
    async fn inner() -> Result<(), JsValue> {
        crate::util::parser::init().await?;
        let language = crate::util::language::load().await?;
        assert_eq!(11, language.version());
        Ok(())
    }
    assert!(inner().await.is_ok());
}

#[wasm_bindgen_test]
async fn field_count() {
    async fn inner() -> Result<(), JsValue> {
        crate::util::parser::init().await?;
        let language = crate::util::language::load().await?;
        assert_eq!(34, language.field_count());
        Ok(())
    }
    assert!(inner().await.is_ok());
}

#[wasm_bindgen_test]
async fn node_kind_count() {
    async fn inner() -> Result<(), JsValue> {
        crate::util::parser::init().await?;
        let language = crate::util::language::load().await?;
        assert_eq!(232, language.node_kind_count());
        Ok(())
    }
    assert!(inner().await.is_ok());
}

#[wasm_bindgen_test]
async fn field_name_for_id() {
    async fn inner() -> Result<(), JsValue> {
        crate::util::parser::init().await?;
        let language = crate::util::language::load().await?;
        assert_eq!(Some(12), language.field_id_for_name("decorator"));
        Ok(())
    }
    assert!(inner().await.is_ok());
}

#[wasm_bindgen_test]
async fn field_id_for_name() {
    async fn inner() -> Result<(), JsValue> {
        crate::util::parser::init().await?;
        let language = crate::util::language::load().await?;
        assert_eq!(Some("decorator".into()), language.field_name_for_id(12));
        Ok(())
    }
    assert!(inner().await.is_ok());
}

#[wasm_bindgen_test]
async fn id_for_node_kind() {
    async fn inner() -> Result<(), JsValue> {
        crate::util::parser::init().await?;
        let language = crate::util::language::load().await?;
        let kind = "export_statement";
        let named = true;
        assert_eq!(120, language.id_for_node_kind(kind, named));
        Ok(())
    }
    assert!(inner().await.is_ok());
}

#[wasm_bindgen_test]
async fn node_kind_for_id() {
    async fn inner() -> Result<(), JsValue> {
        crate::util::parser::init().await?;
        let language = crate::util::language::load().await?;
        let kind_id = 120;
        assert_eq!(Some("export_statement".into()), language.node_kind_for_id(kind_id));
        Ok(())
    }
    assert!(inner().await.is_ok());
}

#[wasm_bindgen_test]
async fn node_kind_is_named() {
    async fn inner() -> Result<(), JsValue> {
        crate::util::parser::init().await?;
        let language = crate::util::language::load().await?;
        let kind_id = 4;
        assert_eq!(Some("*".into()), language.node_kind_for_id(kind_id));
        assert_eq!(false, language.node_kind_is_named(kind_id));
        Ok(())
    }
    assert!(inner().await.is_ok());
}

#[wasm_bindgen_test]
async fn node_kind_is_visible() {
    async fn inner() -> Result<(), JsValue> {
        crate::util::parser::init().await?;
        let language = crate::util::language::load().await?;
        let kind_id = 95;
        assert_eq!(false, language.node_kind_is_visible(kind_id));
        let kind_id = 96;
        assert_eq!(true, language.node_kind_is_visible(kind_id));
        let kind_id = 97;
        assert_eq!(false, language.node_kind_is_visible(kind_id));
        Ok(())
    }
    assert!(inner().await.is_ok());
}

#[wasm_bindgen_test]
async fn query() {
    async fn inner() -> Result<(), JsValue> {
        crate::util::parser::init().await?;
        let language = crate::util::language::load().await?;
        let query = r###"
        (function_declaration name: (identifier) @fn-def)
        (call_expression function: (identifier) @fn-ref)
        "###
        .into();
        language.query(&query)?;
        Ok(())
    }
    assert!(inner().await.is_ok());
}

#[wasm_bindgen_test]
async fn query_throws() {
    async fn inner() -> Result<(), JsValue> {
        crate::util::parser::init().await?;
        let language = crate::util::language::load().await?;
        let query = r###"
        (function_declaration wat)
        "###
        .into();
        let _query = language.query(&query)?;
        Ok(())
    }
    assert!(inner().await.is_err());
}
