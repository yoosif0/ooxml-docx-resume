.PHONY: gen zip unzip 

gen:
	node src/gen.mjs

zip:
	node src/gen.mjs && cd dest && zip -r resume.docx ./*  && nk ./resume.docx

unzip:
	rm -rf test && unzip dest/resume.docx -d test
