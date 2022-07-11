function is_vetor(v){
	return 'x' in myObj && 'y' in myObj;
}
function to_vector(v){
	if (typeof v === 'number')
		v = {'x': v, 'y': v};
	if (v.constructor && v.constructor.name == 'Array')
		v = {'x': v[0], 'y': v[1]};
	if (is_vetor(v))
		return v;
	throw {name : 'Type error', message : v + ' is of type ' + (typeof v) + ', expected vector.'}; 
}
function add(v1, v2){
	v1 = to_vector(v1); v2 = to_vector(v2);
	return {'x': v1.x + v2.x, 'y': v1.y + v2.y};
}
function sub(v1, v2){
	v1 = to_vector(v1); v2 = to_vector(v2);
	return {'x': v1.x - v2.x, 'y': v1.y - v2.y};
}
function mult(v1, v2){
	v1 = to_vector(v1); v2 = to_vector(v2);
	return {'x': v1.x * v2.x, 'y': v1.y * v2.y};
}
function div(v1, v2){
	v1 = to_vector(v1); v2 = to_vector(v2);
	return {'x': v1.x / v2.x, 'y': v1.y / v2.y};
}
function len(v){
	return Math.sqrt(len2(v));
}
function len2(v){
	v = to_vector(v);
	return v.x * v.x + v.y * v.y;
}
function dot(v1, v2){
	var v = mult(v1, v2)
	return v.x+v.y;
}
function cross(v1, v2){
	v1 = to_vector(v1); v2 = to_vector(v2);
	return v1.x * v2.y - v2.x * v1.y;
}
function lerp(v1, v2, f){
	return mult(v1, sub(1, f)), mult(v2, f);
}
function randomVector(){
	return {'x':Math.random(), 'y':Math.random()};
}
