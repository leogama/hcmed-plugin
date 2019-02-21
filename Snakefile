pages = ['hcmed_lista']

rule compile_bookmarklet:
  input: '{page}.js'
  output: '{page}.o.js'
  message: 'Compiling "{wildcards.page}" with buble to enhance compatibility'
  shell: 'buble {input} --target chrome:49,ie:9 --output {output}'
    
rule compress_bookmarklet:
  input: rules.compile_bookmarklet.output
  output: 'plugin/{page}.bookmarklet'
  message: 'Compressing "{wildcards.page}" code to bookmarklet format'
  shell: 'bookmarklet {input} {output}'

rule all:
  input: expand(rules.compress_bookmarklet.output, page=pages)

# vim: set ts=2 sts=2 sw=2 ft=snakemake:
