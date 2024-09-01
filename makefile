.PHONY: gen zip unzip 

gen:
	node src/gen.mjs

zip:
	node src/gen.mjs && cd dest && zip -r ../zz.docx ./*  && open ../zz.docx

unzip:
	rm -rf test && unzip zz.docx -d test