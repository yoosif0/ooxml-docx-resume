.PHONY: gen zip unzip 

gen:
	node src/gen.mjs

zip:
	node src/gen.mjs && cd dest && \
	zip -r ../zz.docx ./*  && \
	nohup lowriter ../zz.docx >/dev/null 2>&1 &

unzip:
	rm -rf test && unzip zz.docx -d test
