import numscrypt as ns

def rand (*dims):
	result = ns.empty (dims, 'float64')
	for i in range (result.data.length):
		result.data [i] = Math.random ()
	return result
	