// if NodeList doesn't support forEach, use Array's forEach()
NodeList.prototype.forEach = NodeList.prototype.forEach || Array.prototype.forEach;
