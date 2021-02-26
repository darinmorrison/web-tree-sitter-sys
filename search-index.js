var searchIndex = JSON.parse('{\
"web_tree_sitter_sys":{"doc":"","i":[[3,"Edit","web_tree_sitter_sys","",null,null],[11,"new_end_index","","",0,[[],["u32",15]]],[11,"new_end_position","","",0,[[],["point",3]]],[11,"old_end_index","","",0,[[],["u32",15]]],[11,"old_end_position","","",0,[[],["point",3]]],[11,"start_index","","",0,[[],["u32",15]]],[11,"start_position","","",0,[[],["point",3]]],[11,"new","","",0,[[["u32",15],["point",3]]]],[6,"Input","","",null,null],[6,"InputClosureType","","",null,null],[6,"Logger","","",null,null],[6,"LoggerClosureType","","",null,null],[3,"LoggerParams","","",null,null],[3,"Language","","",null,null],[11,"load_bytes","","",1,[[["uint8array",3]],["promise",3]]],[11,"load_path","","",1,[[["str",15]],["promise",3]]],[11,"version","","",1,[[],["u32",15]]],[11,"field_count","","",1,[[],["u16",15]]],[11,"node_kind_count","","",1,[[],["u16",15]]],[11,"field_name_for_id","","",1,[[["u16",15]],[["option",4],["string",3]]]],[11,"field_id_for_name","","",1,[[["str",15]],[["option",4],["u16",15]]]],[11,"id_for_node_kind","","",1,[[["bool",15],["str",15]],["u16",15]]],[11,"node_kind_for_id","","",1,[[["u16",15]],[["option",4],["string",3]]]],[11,"node_kind_is_named","","",1,[[["u16",15]],["bool",15]]],[11,"node_kind_is_visible","","",1,[[["u16",15]],["bool",15]]],[11,"query","","",1,[[["jsstring",3]],[["result",4],["query",3],["queryerror",3]]]],[3,"LanguageError","","",null,null],[3,"ParseOptions","","",null,null],[11,"included_ranges","","",2,[[],[["option",4],["array",3]]]],[11,"new","","",2,[[["array",3],["option",4]]]],[3,"Point","","",null,null],[11,"column","","",3,[[],["u32",15]]],[11,"row","","",3,[[],["u32",15]]],[11,"new","","",3,[[["u32",15]]]],[3,"PredicateOperand","","",null,null],[11,"name","","",4,[[],["jsstring",3]]],[11,"type_","","",4,[[],["jsstring",3]]],[11,"new","","",4,[[["jsstring",3]]]],[3,"PredicateResult","","",null,null],[11,"operator","","",5,[[],["jsstring",3]]],[11,"operands","","",5,[[],["box",3]]],[11,"new","","",5,[[["array",3],["jsstring",3]]]],[3,"Query","","",null,null],[11,"capture_names","","",6,[[],["box",3]]],[11,"delete","","",6,[[]]],[11,"matches","","",6,[[["point",3],["syntaxnode",3],["option",4]],["box",3]]],[11,"captures","","",6,[[["point",3],["syntaxnode",3],["option",4]],["box",3]]],[11,"predicates_for_pattern","","",6,[[["u32",15]],["box",3]]],[3,"QueryCapture","","",null,null],[11,"name","","",7,[[],["jsstring",3]]],[11,"node","","",7,[[],["syntaxnode",3]]],[11,"new","","",7,[[["syntaxnode",3],["jsstring",3]]]],[3,"QueryError","","",null,null],[3,"QueryMatch","","",null,null],[11,"pattern","","",8,[[],["u32",15]]],[11,"captures","","",8,[[],["box",3]]],[11,"new","","",8,[[["u32",15],["array",3]]]],[3,"Range","","",null,null],[11,"end_index","","",9,[[],["u32",15]]],[11,"end_position","","",9,[[],["point",3]]],[11,"start_index","","",9,[[],["u32",15]]],[11,"start_position","","",9,[[],["point",3]]],[11,"new","","",9,[[["point",3],["u32",15]]]],[3,"SyntaxNode","","",null,null],[11,"child_count","","",10,[[],["u32",15]]],[11,"children","","",10,[[],["box",3]]],[11,"end_index","","",10,[[],["u32",15]]],[11,"end_position","","",10,[[],["point",3]]],[11,"first_child","","",10,[[],[["option",4],["syntaxnode",3]]]],[11,"first_named_child","","",10,[[],[["option",4],["syntaxnode",3]]]],[11,"id","","",10,[[],["u32",15]]],[11,"last_child","","",10,[[],[["option",4],["syntaxnode",3]]]],[11,"last_named_child","","",10,[[],[["option",4],["syntaxnode",3]]]],[11,"named_child_count","","",10,[[],["u32",15]]],[11,"named_children","","",10,[[],["box",3]]],[11,"next_named_sibling","","",10,[[],[["option",4],["syntaxnode",3]]]],[11,"next_sibling","","",10,[[],[["option",4],["syntaxnode",3]]]],[11,"parent","","",10,[[],[["option",4],["syntaxnode",3]]]],[11,"previous_named_sibling","","",10,[[],[["option",4],["syntaxnode",3]]]],[11,"previous_sibling","","",10,[[],[["option",4],["syntaxnode",3]]]],[11,"start_index","","",10,[[],["u32",15]]],[11,"start_position","","",10,[[],["point",3]]],[11,"text","","",10,[[],["jsstring",3]]],[11,"tree","","",10,[[],["tree",3]]],[11,"type_","","",10,[[],["jsstring",3]]],[11,"type_id","","",10,[[],["u16",15]]],[11,"child","","",10,[[["u32",15]],[["option",4],["syntaxnode",3]]]],[11,"child_for_field_id","","",10,[[["u16",15]],[["option",4],["syntaxnode",3]]]],[11,"child_for_field_name","","",10,[[["str",15]],[["option",4],["syntaxnode",3]]]],[11,"descendant_for_index","","",10,[[["u32",15]],[["option",4],["syntaxnode",3]]]],[11,"descendant_for_index_range","","",10,[[["u32",15]],[["option",4],["syntaxnode",3]]]],[11,"descendant_for_position","","",10,[[["point",3]],[["option",4],["syntaxnode",3]]]],[11,"descendant_for_position_range","","",10,[[["point",3]],[["option",4],["syntaxnode",3]]]],[11,"descendants_of_type_array","","",10,[[["point",3],["box",3],["option",4]],["box",3]]],[11,"descendants_of_type_string","","",10,[[["point",3],["option",4],["str",15]],["box",3]]],[11,"equals","","",10,[[["syntaxnode",3]],["bool",15]]],[11,"has_changes","","",10,[[],["bool",15]]],[11,"has_error","","",10,[[],["bool",15]]],[11,"is_missing","","",10,[[],["bool",15]]],[11,"is_named","","",10,[[],["bool",15]]],[11,"named_child","","",10,[[["u32",15]],[["option",4],["syntaxnode",3]]]],[11,"named_descendant_for_index","","",10,[[["u32",15]],[["option",4],["syntaxnode",3]]]],[11,"named_descendant_for_index_range","","",10,[[["u32",15]],[["option",4],["syntaxnode",3]]]],[11,"named_descendant_for_position","","",10,[[["point",3]],[["option",4],["syntaxnode",3]]]],[11,"named_descendant_for_position_range","","",10,[[["point",3]],[["option",4],["syntaxnode",3]]]],[11,"to_string","","",10,[[],["jsstring",3]]],[11,"walk","","",10,[[],["treecursor",3]]],[3,"Tree","","",null,null],[11,"root_node","","",11,[[],["syntaxnode",3]]],[11,"copy","","",11,[[],["tree",3]]],[11,"delete","","",11,[[]]],[11,"edit","","",11,[[["edit",3]],["tree",3]]],[11,"walk","","",11,[[],["treecursor",3]]],[11,"get_changed_ranges","","",11,[[["tree",3]],["box",3]]],[11,"get_language","","",11,[[],["language",3]]],[3,"TreeCursor","","",null,null],[11,"end_index","","",12,[[],["u32",15]]],[11,"end_position","","",12,[[],["point",3]]],[11,"node_is_named","","",12,[[],["bool",15]]],[11,"node_text","","",12,[[],["jsstring",3]]],[11,"node_type","","",12,[[],["jsstring",3]]],[11,"start_index","","",12,[[],["u32",15]]],[11,"start_position","","",12,[[],["point",3]]],[11,"current_field_id","","",12,[[],[["option",4],["u16",15]]]],[11,"current_field_name","","",12,[[],[["jsstring",3],["option",4]]]],[11,"current_node","","",12,[[],["syntaxnode",3]]],[11,"delete","","",12,[[]]],[11,"goto_first_child","","",12,[[],["bool",15]]],[11,"goto_next_sibling","","",12,[[],["bool",15]]],[11,"goto_parent","","",12,[[],["bool",15]]],[11,"reset","","",12,[[["syntaxnode",3]]]],[3,"Parser","","",null,null],[11,"init","","",13,[[],["promise",3]]],[11,"new","","",13,[[],[["result",4],["parser",3],["parsererror",3]]]],[11,"delete","","",13,[[]]],[11,"get_language","","",13,[[],[["option",4],["language",3]]]],[11,"get_logger","","",13,[[],[["logger",6],["option",4]]]],[11,"get_timeout_micros","","",13,[[],["f64",15]]],[11,"parse_with_function","","",13,[[["parseoptions",3],["input",6],["option",4],["option",4],["tree",3]],[["result",4],["option",4],["parsererror",3]]]],[11,"parse_with_string","","",13,[[["jsstring",3],["parseoptions",3],["option",4],["option",4],["tree",3]],[["result",4],["option",4],["parsererror",3]]]],[11,"reset","","",13,[[]]],[11,"set_language","","",13,[[["option",4],["language",3]],[["result",4],["languageerror",3]]]],[11,"set_logger","","",13,[[["logger",6],["option",4]]]],[11,"set_timeout_micros","","",13,[[["f64",15]]]],[3,"ParserError","","",null,null],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"return_abi","","",0,[[]]],[11,"from","","",14,[[]]],[11,"into","","",14,[[]]],[11,"to_owned","","",14,[[]]],[11,"clone_into","","",14,[[]]],[11,"borrow","","",14,[[]]],[11,"borrow_mut","","",14,[[]]],[11,"try_from","","",14,[[],["result",4]]],[11,"try_into","","",14,[[],["result",4]]],[11,"type_id","","",14,[[],["typeid",3]]],[11,"return_abi","","",14,[[]]],[11,"from","","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"return_abi","","",1,[[]]],[11,"from","","",15,[[]]],[11,"into","","",15,[[]]],[11,"to_owned","","",15,[[]]],[11,"clone_into","","",15,[[]]],[11,"borrow","","",15,[[]]],[11,"borrow_mut","","",15,[[]]],[11,"try_from","","",15,[[],["result",4]]],[11,"try_into","","",15,[[],["result",4]]],[11,"type_id","","",15,[[],["typeid",3]]],[11,"return_abi","","",15,[[]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"return_abi","","",2,[[]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"to_owned","","",3,[[]]],[11,"clone_into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"return_abi","","",3,[[]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_owned","","",4,[[]]],[11,"clone_into","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"return_abi","","",4,[[]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"to_owned","","",5,[[]]],[11,"clone_into","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"return_abi","","",5,[[]]],[11,"from","","",6,[[]]],[11,"into","","",6,[[]]],[11,"to_owned","","",6,[[]]],[11,"clone_into","","",6,[[]]],[11,"borrow","","",6,[[]]],[11,"borrow_mut","","",6,[[]]],[11,"try_from","","",6,[[],["result",4]]],[11,"try_into","","",6,[[],["result",4]]],[11,"type_id","","",6,[[],["typeid",3]]],[11,"return_abi","","",6,[[]]],[11,"from","","",7,[[]]],[11,"into","","",7,[[]]],[11,"to_owned","","",7,[[]]],[11,"clone_into","","",7,[[]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"return_abi","","",7,[[]]],[11,"from","","",16,[[]]],[11,"into","","",16,[[]]],[11,"to_owned","","",16,[[]]],[11,"clone_into","","",16,[[]]],[11,"borrow","","",16,[[]]],[11,"borrow_mut","","",16,[[]]],[11,"try_from","","",16,[[],["result",4]]],[11,"try_into","","",16,[[],["result",4]]],[11,"type_id","","",16,[[],["typeid",3]]],[11,"return_abi","","",16,[[]]],[11,"from","","",8,[[]]],[11,"into","","",8,[[]]],[11,"to_owned","","",8,[[]]],[11,"clone_into","","",8,[[]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"return_abi","","",8,[[]]],[11,"from","","",9,[[]]],[11,"into","","",9,[[]]],[11,"to_owned","","",9,[[]]],[11,"clone_into","","",9,[[]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"return_abi","","",9,[[]]],[11,"from","","",10,[[]]],[11,"into","","",10,[[]]],[11,"to_owned","","",10,[[]]],[11,"clone_into","","",10,[[]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"return_abi","","",10,[[]]],[11,"from","","",11,[[]]],[11,"into","","",11,[[]]],[11,"to_owned","","",11,[[]]],[11,"clone_into","","",11,[[]]],[11,"borrow","","",11,[[]]],[11,"borrow_mut","","",11,[[]]],[11,"try_from","","",11,[[],["result",4]]],[11,"try_into","","",11,[[],["result",4]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"return_abi","","",11,[[]]],[11,"from","","",12,[[]]],[11,"into","","",12,[[]]],[11,"to_owned","","",12,[[]]],[11,"clone_into","","",12,[[]]],[11,"borrow","","",12,[[]]],[11,"borrow_mut","","",12,[[]]],[11,"try_from","","",12,[[],["result",4]]],[11,"try_into","","",12,[[],["result",4]]],[11,"type_id","","",12,[[],["typeid",3]]],[11,"return_abi","","",12,[[]]],[11,"from","","",13,[[]]],[11,"into","","",13,[[]]],[11,"to_owned","","",13,[[]]],[11,"clone_into","","",13,[[]]],[11,"borrow","","",13,[[]]],[11,"borrow_mut","","",13,[[]]],[11,"try_from","","",13,[[],["result",4]]],[11,"try_into","","",13,[[],["result",4]]],[11,"type_id","","",13,[[],["typeid",3]]],[11,"return_abi","","",13,[[]]],[11,"from","","",17,[[]]],[11,"into","","",17,[[]]],[11,"to_owned","","",17,[[]]],[11,"clone_into","","",17,[[]]],[11,"borrow","","",17,[[]]],[11,"borrow_mut","","",17,[[]]],[11,"try_from","","",17,[[],["result",4]]],[11,"try_into","","",17,[[],["result",4]]],[11,"type_id","","",17,[[],["typeid",3]]],[11,"return_abi","","",17,[[]]],[11,"as_ref","","",0,[[],["jsvalue",3]]],[11,"as_ref","","",0,[[],["edit",3]]],[11,"as_ref","","",0,[[],["object",3]]],[11,"as_ref","","",14,[[],["jsvalue",3]]],[11,"as_ref","","",14,[[],["loggerparams",3]]],[11,"as_ref","","",14,[[],["object",3]]],[11,"as_ref","","",1,[[],["jsvalue",3]]],[11,"as_ref","","",1,[[],["language",3]]],[11,"as_ref","","",15,[[],["jsvalue",3]]],[11,"as_ref","","",15,[[],["languageerror",3]]],[11,"as_ref","","",15,[[],["error",3]]],[11,"as_ref","","",2,[[],["jsvalue",3]]],[11,"as_ref","","",2,[[],["parseoptions",3]]],[11,"as_ref","","",2,[[],["object",3]]],[11,"as_ref","","",3,[[],["jsvalue",3]]],[11,"as_ref","","",3,[[],["point",3]]],[11,"as_ref","","",3,[[],["object",3]]],[11,"as_ref","","",4,[[],["jsvalue",3]]],[11,"as_ref","","",4,[[],["predicateoperand",3]]],[11,"as_ref","","",4,[[],["object",3]]],[11,"as_ref","","",5,[[],["jsvalue",3]]],[11,"as_ref","","",5,[[],["predicateresult",3]]],[11,"as_ref","","",5,[[],["object",3]]],[11,"as_ref","","",6,[[],["jsvalue",3]]],[11,"as_ref","","",6,[[],["query",3]]],[11,"as_ref","","",7,[[],["jsvalue",3]]],[11,"as_ref","","",7,[[],["querycapture",3]]],[11,"as_ref","","",7,[[],["object",3]]],[11,"as_ref","","",16,[[],["jsvalue",3]]],[11,"as_ref","","",16,[[],["queryerror",3]]],[11,"as_ref","","",16,[[],["error",3]]],[11,"as_ref","","",8,[[],["jsvalue",3]]],[11,"as_ref","","",8,[[],["querymatch",3]]],[11,"as_ref","","",8,[[],["object",3]]],[11,"as_ref","","",9,[[],["jsvalue",3]]],[11,"as_ref","","",9,[[],["range",3]]],[11,"as_ref","","",9,[[],["object",3]]],[11,"as_ref","","",10,[[],["jsvalue",3]]],[11,"as_ref","","",10,[[],["syntaxnode",3]]],[11,"as_ref","","",11,[[],["jsvalue",3]]],[11,"as_ref","","",11,[[],["tree",3]]],[11,"as_ref","","",12,[[],["jsvalue",3]]],[11,"as_ref","","",12,[[],["treecursor",3]]],[11,"as_ref","","",13,[[],["jsvalue",3]]],[11,"as_ref","","",13,[[],["parser",3]]],[11,"as_ref","","",17,[[],["jsvalue",3]]],[11,"as_ref","","",17,[[],["parsererror",3]]],[11,"as_ref","","",17,[[],["error",3]]],[11,"from","","",0,[[["jsvalue",3]],["edit",3]]],[11,"from","","",14,[[["jsvalue",3]],["loggerparams",3]]],[11,"from","","",1,[[["jsvalue",3]],["language",3]]],[11,"from","","",15,[[["jsvalue",3]],["languageerror",3]]],[11,"from","","",2,[[["jsvalue",3]],["parseoptions",3]]],[11,"from","","",3,[[["jsvalue",3]],["point",3]]],[11,"from","","",4,[[["jsvalue",3]],["predicateoperand",3]]],[11,"from","","",5,[[["jsvalue",3]],["predicateresult",3]]],[11,"from","","",6,[[["jsvalue",3]],["query",3]]],[11,"from","","",7,[[["jsvalue",3]],["querycapture",3]]],[11,"from","","",16,[[["jsvalue",3]],["queryerror",3]]],[11,"from","","",8,[[["jsvalue",3]],["querymatch",3]]],[11,"from","","",9,[[["jsvalue",3]],["range",3]]],[11,"from","","",10,[[["jsvalue",3]],["syntaxnode",3]]],[11,"from","","",11,[[["jsvalue",3]],["tree",3]]],[11,"from","","",12,[[["jsvalue",3]],["treecursor",3]]],[11,"from","","",13,[[["jsvalue",3]],["parser",3]]],[11,"from","","",17,[[["jsvalue",3]],["parsererror",3]]],[11,"clone","","",0,[[],["edit",3]]],[11,"clone","","",14,[[],["loggerparams",3]]],[11,"clone","","",1,[[],["language",3]]],[11,"clone","","",15,[[],["languageerror",3]]],[11,"clone","","",2,[[],["parseoptions",3]]],[11,"clone","","",3,[[],["point",3]]],[11,"clone","","",4,[[],["predicateoperand",3]]],[11,"clone","","",5,[[],["predicateresult",3]]],[11,"clone","","",6,[[],["query",3]]],[11,"clone","","",7,[[],["querycapture",3]]],[11,"clone","","",16,[[],["queryerror",3]]],[11,"clone","","",8,[[],["querymatch",3]]],[11,"clone","","",9,[[],["range",3]]],[11,"clone","","",10,[[],["syntaxnode",3]]],[11,"clone","","",11,[[],["tree",3]]],[11,"clone","","",12,[[],["treecursor",3]]],[11,"clone","","",13,[[],["parser",3]]],[11,"clone","","",17,[[],["parsererror",3]]],[11,"default","","",0,[[]]],[11,"default","","",2,[[]]],[11,"default","","",3,[[]]],[11,"default","","",4,[[]]],[11,"default","","",5,[[]]],[11,"default","","",9,[[],["range",3]]],[11,"eq","","",0,[[["edit",3]],["bool",15]]],[11,"ne","","",0,[[["edit",3]],["bool",15]]],[11,"eq","","",14,[[["loggerparams",3]],["bool",15]]],[11,"ne","","",14,[[["loggerparams",3]],["bool",15]]],[11,"eq","","",1,[[["language",3]],["bool",15]]],[11,"ne","","",1,[[["language",3]],["bool",15]]],[11,"eq","","",15,[[["languageerror",3]],["bool",15]]],[11,"ne","","",15,[[["languageerror",3]],["bool",15]]],[11,"eq","","",2,[[["parseoptions",3]],["bool",15]]],[11,"ne","","",2,[[["parseoptions",3]],["bool",15]]],[11,"eq","","",3,[[["point",3]],["bool",15]]],[11,"ne","","",3,[[["point",3]],["bool",15]]],[11,"eq","","",4,[[["predicateoperand",3]],["bool",15]]],[11,"ne","","",4,[[["predicateoperand",3]],["bool",15]]],[11,"eq","","",5,[[["predicateresult",3]],["bool",15]]],[11,"ne","","",5,[[["predicateresult",3]],["bool",15]]],[11,"eq","","",7,[[["querycapture",3]],["bool",15]]],[11,"ne","","",7,[[["querycapture",3]],["bool",15]]],[11,"eq","","",16,[[["queryerror",3]],["bool",15]]],[11,"ne","","",16,[[["queryerror",3]],["bool",15]]],[11,"eq","","",8,[[["querymatch",3]],["bool",15]]],[11,"ne","","",8,[[["querymatch",3]],["bool",15]]],[11,"eq","","",9,[[["range",3]],["bool",15]]],[11,"ne","","",9,[[["range",3]],["bool",15]]],[11,"eq","","",10,[[["syntaxnode",3]],["bool",15]]],[11,"eq","","",17,[[["parsererror",3]],["bool",15]]],[11,"ne","","",17,[[["parsererror",3]],["bool",15]]],[11,"deref","","",0,[[],["object",3]]],[11,"deref","","",14,[[],["object",3]]],[11,"deref","","",1,[[],["jsvalue",3]]],[11,"deref","","",15,[[],["error",3]]],[11,"deref","","",2,[[],["object",3]]],[11,"deref","","",3,[[],["object",3]]],[11,"deref","","",4,[[],["object",3]]],[11,"deref","","",5,[[],["object",3]]],[11,"deref","","",6,[[],["jsvalue",3]]],[11,"deref","","",7,[[],["object",3]]],[11,"deref","","",16,[[],["error",3]]],[11,"deref","","",8,[[],["object",3]]],[11,"deref","","",9,[[],["object",3]]],[11,"deref","","",10,[[],["jsvalue",3]]],[11,"deref","","",11,[[],["jsvalue",3]]],[11,"deref","","",12,[[],["jsvalue",3]]],[11,"deref","","",13,[[],["jsvalue",3]]],[11,"deref","","",17,[[],["error",3]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",14,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",15,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"fmt","","",6,[[["formatter",3]],["result",6]]],[11,"fmt","","",7,[[["formatter",3]],["result",6]]],[11,"fmt","","",16,[[["formatter",3]],["result",6]]],[11,"fmt","","",8,[[["formatter",3]],["result",6]]],[11,"fmt","","",9,[[["formatter",3]],["result",6]]],[11,"fmt","","",10,[[["formatter",3]],["result",6]]],[11,"fmt","","",11,[[["formatter",3]],["result",6]]],[11,"fmt","","",12,[[["formatter",3]],["result",6]]],[11,"fmt","","",13,[[["formatter",3]],["result",6]]],[11,"fmt","","",17,[[["formatter",3]],["result",6]]],[11,"hash","","",10,[[]]],[11,"instanceof","","",0,[[["jsvalue",3]],["bool",15]]],[11,"unchecked_from_js","","",0,[[["jsvalue",3]]]],[11,"unchecked_from_js_ref","","",0,[[["jsvalue",3]]]],[11,"instanceof","","",14,[[["jsvalue",3]],["bool",15]]],[11,"unchecked_from_js","","",14,[[["jsvalue",3]]]],[11,"unchecked_from_js_ref","","",14,[[["jsvalue",3]]]],[11,"instanceof","","",1,[[["jsvalue",3]],["bool",15]]],[11,"unchecked_from_js","","",1,[[["jsvalue",3]]]],[11,"unchecked_from_js_ref","","",1,[[["jsvalue",3]]]],[11,"instanceof","","",15,[[["jsvalue",3]],["bool",15]]],[11,"unchecked_from_js","","",15,[[["jsvalue",3]]]],[11,"unchecked_from_js_ref","","",15,[[["jsvalue",3]]]],[11,"instanceof","","",2,[[["jsvalue",3]],["bool",15]]],[11,"unchecked_from_js","","",2,[[["jsvalue",3]]]],[11,"unchecked_from_js_ref","","",2,[[["jsvalue",3]]]],[11,"instanceof","","",3,[[["jsvalue",3]],["bool",15]]],[11,"unchecked_from_js","","",3,[[["jsvalue",3]]]],[11,"unchecked_from_js_ref","","",3,[[["jsvalue",3]]]],[11,"instanceof","","",4,[[["jsvalue",3]],["bool",15]]],[11,"unchecked_from_js","","",4,[[["jsvalue",3]]]],[11,"unchecked_from_js_ref","","",4,[[["jsvalue",3]]]],[11,"instanceof","","",5,[[["jsvalue",3]],["bool",15]]],[11,"unchecked_from_js","","",5,[[["jsvalue",3]]]],[11,"unchecked_from_js_ref","","",5,[[["jsvalue",3]]]],[11,"instanceof","","",6,[[["jsvalue",3]],["bool",15]]],[11,"unchecked_from_js","","",6,[[["jsvalue",3]]]],[11,"unchecked_from_js_ref","","",6,[[["jsvalue",3]]]],[11,"instanceof","","",7,[[["jsvalue",3]],["bool",15]]],[11,"unchecked_from_js","","",7,[[["jsvalue",3]]]],[11,"unchecked_from_js_ref","","",7,[[["jsvalue",3]]]],[11,"instanceof","","",16,[[["jsvalue",3]],["bool",15]]],[11,"unchecked_from_js","","",16,[[["jsvalue",3]]]],[11,"unchecked_from_js_ref","","",16,[[["jsvalue",3]]]],[11,"instanceof","","",8,[[["jsvalue",3]],["bool",15]]],[11,"unchecked_from_js","","",8,[[["jsvalue",3]]]],[11,"unchecked_from_js_ref","","",8,[[["jsvalue",3]]]],[11,"instanceof","","",9,[[["jsvalue",3]],["bool",15]]],[11,"unchecked_from_js","","",9,[[["jsvalue",3]]]],[11,"unchecked_from_js_ref","","",9,[[["jsvalue",3]]]],[11,"instanceof","","",10,[[["jsvalue",3]],["bool",15]]],[11,"unchecked_from_js","","",10,[[["jsvalue",3]]]],[11,"unchecked_from_js_ref","","",10,[[["jsvalue",3]]]],[11,"instanceof","","",11,[[["jsvalue",3]],["bool",15]]],[11,"unchecked_from_js","","",11,[[["jsvalue",3]]]],[11,"unchecked_from_js_ref","","",11,[[["jsvalue",3]]]],[11,"instanceof","","",12,[[["jsvalue",3]],["bool",15]]],[11,"unchecked_from_js","","",12,[[["jsvalue",3]]]],[11,"unchecked_from_js_ref","","",12,[[["jsvalue",3]]]],[11,"instanceof","","",13,[[["jsvalue",3]],["bool",15]]],[11,"unchecked_from_js","","",13,[[["jsvalue",3]]]],[11,"unchecked_from_js_ref","","",13,[[["jsvalue",3]]]],[11,"instanceof","","",17,[[["jsvalue",3]],["bool",15]]],[11,"unchecked_from_js","","",17,[[["jsvalue",3]]]],[11,"unchecked_from_js_ref","","",17,[[["jsvalue",3]]]],[11,"ref_from_abi","","",0,[[]]],[11,"ref_from_abi","","",14,[[]]],[11,"ref_from_abi","","",1,[[]]],[11,"ref_from_abi","","",15,[[]]],[11,"ref_from_abi","","",2,[[]]],[11,"ref_from_abi","","",3,[[]]],[11,"ref_from_abi","","",4,[[]]],[11,"ref_from_abi","","",5,[[]]],[11,"ref_from_abi","","",6,[[]]],[11,"ref_from_abi","","",7,[[]]],[11,"ref_from_abi","","",16,[[]]],[11,"ref_from_abi","","",8,[[]]],[11,"ref_from_abi","","",9,[[]]],[11,"ref_from_abi","","",10,[[]]],[11,"ref_from_abi","","",11,[[]]],[11,"ref_from_abi","","",12,[[]]],[11,"ref_from_abi","","",13,[[]]],[11,"ref_from_abi","","",17,[[]]],[11,"from_abi","","",0,[[]]],[11,"from_abi","","",14,[[]]],[11,"from_abi","","",1,[[]]],[11,"from_abi","","",15,[[]]],[11,"from_abi","","",2,[[]]],[11,"from_abi","","",3,[[]]],[11,"from_abi","","",4,[[]]],[11,"from_abi","","",5,[[]]],[11,"from_abi","","",6,[[]]],[11,"from_abi","","",7,[[]]],[11,"from_abi","","",16,[[]]],[11,"from_abi","","",8,[[]]],[11,"from_abi","","",9,[[]]],[11,"from_abi","","",10,[[]]],[11,"from_abi","","",11,[[]]],[11,"from_abi","","",12,[[]]],[11,"from_abi","","",13,[[]]],[11,"from_abi","","",17,[[]]],[11,"into_abi","","",0,[[]]],[11,"into_abi","","",14,[[]]],[11,"into_abi","","",1,[[]]],[11,"into_abi","","",15,[[]]],[11,"into_abi","","",2,[[]]],[11,"into_abi","","",3,[[]]],[11,"into_abi","","",4,[[]]],[11,"into_abi","","",5,[[]]],[11,"into_abi","","",6,[[]]],[11,"into_abi","","",7,[[]]],[11,"into_abi","","",16,[[]]],[11,"into_abi","","",8,[[]]],[11,"into_abi","","",9,[[]]],[11,"into_abi","","",10,[[]]],[11,"into_abi","","",11,[[]]],[11,"into_abi","","",12,[[]]],[11,"into_abi","","",13,[[]]],[11,"into_abi","","",17,[[]]],[11,"describe","","",0,[[]]],[11,"describe","","",14,[[]]],[11,"describe","","",1,[[]]],[11,"describe","","",15,[[]]],[11,"describe","","",2,[[]]],[11,"describe","","",3,[[]]],[11,"describe","","",4,[[]]],[11,"describe","","",5,[[]]],[11,"describe","","",6,[[]]],[11,"describe","","",7,[[]]],[11,"describe","","",16,[[]]],[11,"describe","","",8,[[]]],[11,"describe","","",9,[[]]],[11,"describe","","",10,[[]]],[11,"describe","","",11,[[]]],[11,"describe","","",12,[[]]],[11,"describe","","",13,[[]]],[11,"describe","","",17,[[]]],[11,"is_none","","",0,[[],["bool",15]]],[11,"is_none","","",14,[[],["bool",15]]],[11,"is_none","","",1,[[],["bool",15]]],[11,"is_none","","",15,[[],["bool",15]]],[11,"is_none","","",2,[[],["bool",15]]],[11,"is_none","","",3,[[],["bool",15]]],[11,"is_none","","",4,[[],["bool",15]]],[11,"is_none","","",5,[[],["bool",15]]],[11,"is_none","","",6,[[],["bool",15]]],[11,"is_none","","",7,[[],["bool",15]]],[11,"is_none","","",16,[[],["bool",15]]],[11,"is_none","","",8,[[],["bool",15]]],[11,"is_none","","",9,[[],["bool",15]]],[11,"is_none","","",10,[[],["bool",15]]],[11,"is_none","","",11,[[],["bool",15]]],[11,"is_none","","",12,[[],["bool",15]]],[11,"is_none","","",13,[[],["bool",15]]],[11,"is_none","","",17,[[],["bool",15]]],[11,"none","","",0,[[]]],[11,"none","","",14,[[]]],[11,"none","","",1,[[]]],[11,"none","","",15,[[]]],[11,"none","","",2,[[]]],[11,"none","","",3,[[]]],[11,"none","","",4,[[]]],[11,"none","","",5,[[]]],[11,"none","","",6,[[]]],[11,"none","","",7,[[]]],[11,"none","","",16,[[]]],[11,"none","","",8,[[]]],[11,"none","","",9,[[]]],[11,"none","","",10,[[]]],[11,"none","","",11,[[]]],[11,"none","","",12,[[]]],[11,"none","","",13,[[]]],[11,"none","","",17,[[]]]],"p":[[3,"Edit"],[3,"Language"],[3,"ParseOptions"],[3,"Point"],[3,"PredicateOperand"],[3,"PredicateResult"],[3,"Query"],[3,"QueryCapture"],[3,"QueryMatch"],[3,"Range"],[3,"SyntaxNode"],[3,"Tree"],[3,"TreeCursor"],[3,"Parser"],[3,"LoggerParams"],[3,"LanguageError"],[3,"QueryError"],[3,"ParserError"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);