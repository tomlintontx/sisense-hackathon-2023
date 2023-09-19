
export function isElementNode(node: Node): node is Element {
    return node.nodeType === Node.ELEMENT_NODE;
}

export function isAttributeNode(node: Node): node is Attr {
    return node.nodeType === Node.ATTRIBUTE_NODE;
}

export function isTextNode(node: Node): node is Text {
    return node.nodeType === Node.TEXT_NODE;
}

export function isCommentNode(node: Node): node is Comment {
    return node.nodeType === Node.COMMENT_NODE;
}

export function isDocumentNode(node: Node): node is Document {
    return node.nodeType === Node.DOCUMENT_NODE;
}

export function isDoctypeNode(node: Node): node is DocumentType {
    return node.nodeType === Node.DOCUMENT_TYPE_NODE;
}

export function isFragmentNode(node: Node): node is DocumentFragment {
    return node.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
}
