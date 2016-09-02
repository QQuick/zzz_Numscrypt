import numscrypt as ns

def rand (*dims):
	result = ns.empty (dims, 'float64')
	for i in range (result.size):
		result.realbuf [i] = Math.random ()
	return result
	