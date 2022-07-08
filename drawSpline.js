function updatePath(c) {
	var path = document.querySelector('path#'+c.id);
	var s = '';
	for (var i = 0; i<c.points.length; i++){ 
		var type = (i==0) ? 'M' : ((i%3==1) ? 'C' : ',')
		s += type + ' ' + c.points[i].x + ' ' + c.points[i].y + ' '
	}
	if (c.points[0].x == c.points[c.points.length-1].x && c.points[0].y == c.points[c.points.length-1].y)
		s += 'Z'
	path.setAttribute('d', s);
}
function dothing() {
	var c = {
		'type': 'spline',
		'id': 'p1',
		'x': 1,
		'y': 1,
		'points':
		[
			{
				'x': 1.5,
				'y': 1
			},
			{
				'x': 1.5,
				'y': 1.25
			},
			{
				'x': 1.25,
				'y': 1.5
			},
			{
				'x': 1,
				'y': 1.5
			},
			{
				'x': 0.75,
				'y': 1.5
			},
			{
				'x': 0.5,
				'y': 1.25
			},
			{
				'x': 0.5,
				'y': 1
			},
			{
				'x': 0.5,
				'y': 0.75
			},
			{
				'x': 0.75,
				'y': 0.5
			},
			{
				'x': 1,
				'y': 0.5
			},
			{
				'x': 1.25,
				'y': 0.5
			},
			{
				'x': 1.5,
				'y': 0.75
			},
			{
				'x': 1.5,
				'y': 1
			}
		]
	}
	updatePath(c);
}