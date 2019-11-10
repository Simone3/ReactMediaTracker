#!/bin/bash

#
# Trasforms all SVGs in this directory to multi-size PNGs with the expected React Native filenames
#
# Requires ImageMagick https://imagemagick.org/script/download.php with legacy components (convert)
# Variable IMAGEMAGICK_CONVERT_PATH should be defined (to avoid conflicts between Windows "convert" and ImageMagick "convert"). Value example: C:\Program Files\ImageMagick-7.0.9-Q16\convert.exe
#
# Credits: based on https://coderwall.com/p/m84xgg/svg-to-png-in-multiple-sizes-and-colors
#

# All sizes to generate
sizes=("30" "60" "120")
sizesCount=${#sizes[@]}

# Create target directories if necessary
if [ ! -d pngs ] ; then
	mkdir pngs
fi
if [ ! -d pngs/big ] ; then
	mkdir pngs/big
fi

# Loop all SVGs in the current directory
for svg in `ls *svg` ; do

	# Get file name without extension
    fileName=`echo $svg | sed s/.svg//`
	
	# Create a big PNG starting from the SVG, as a source for all required sizes
	bigPng=pngs/big/$fileName.png
	if [ ! -f $bigPng ] ; then
		"$IMAGEMAGICK_CONVERT_PATH" -depth 16 -background transparent -fill "#000" -colorize 100% -resize 1024x1024 $svg $bigPng
	fi
	echo "Created $bigPng"

	# Loop all sizes
	for i in `seq 1 $sizesCount` ; do
		
		size=${sizes[i - 1]}
		
		# Create the $size x $size PNG
		png=`[ $i == 1 ] && echo "pngs/$fileName.png" || echo "pngs/$fileName@${i}x.png"`
		if [ ! -f $png ] ; then
			"$IMAGEMAGICK_CONVERT_PATH" $bigPng -resize $size"x"$size $png
		fi

		echo "Created $png"
			
	done

done

echo "All done!"

