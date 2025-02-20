.PHONY: gen zipandopen unzip

gen:
	node src/gen.mjs

zipandopen: 
	cd dest && zip -r resume.docx ./*  && nohup lowriter resume.docx >/dev/null 2>&1 &

gzo: gen zipandopen

unzip:
	rm -rf test && unzip dest/resume.docx -d test

