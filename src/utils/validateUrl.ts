import tldEnum from 'tld-enum'

export const validateUrl = (str: string) => {
	const domains = tldEnum.list.map((domain: string) => `.${domain}`)
	let i = 0;
	while (!str.includes(`${domains[i]}`)) {
		if (i === domains.length) {
			console.log(domains[i])
			return false
		}
		i++
	} return true
}
