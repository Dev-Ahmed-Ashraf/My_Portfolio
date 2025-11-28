import '@testing-library/jest-dom'

// Provide a simple IntersectionObserver mock for jsdom tests (used by framer-motion)
class MockIntersectionObserver {
	callback: IntersectionObserverCallback
	constructor(callback: IntersectionObserverCallback) {
		this.callback = callback
	}
	observe() {
		// immediately trigger callback with isIntersecting true for simplicity
		this.callback([{ isIntersecting: true } as IntersectionObserverEntry], this as unknown as IntersectionObserver)
	}
	unobserve() {}
	disconnect() {}
	takeRecords() { return [] }
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
global.IntersectionObserver = MockIntersectionObserver

