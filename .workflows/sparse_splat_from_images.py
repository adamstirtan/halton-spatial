images_path = project_path / "images"
database_path = project_path / "database.db"
sparse_path = project_path / "sparse"
output_path = project_path / "output"

ensure_dir(sparse_path)
ensure_dir(output_path)

#
# COLMAP Feature Extraction
#
run_command([
    "colmap",
    "feature_extractor",
    "--database_path",
    str(database_path),
    "--image_path",
    str(images_path)
])

#
# COLMAP Matching
#
run_command([
    "colmap",
    "exhaustive_matcher",
    "--database_path",
    str(database_path)
])

#
# COLMAP Sparse Reconstruction
#
run_command([
    "colmap",
    "mapper",
    "--database_path",
    str(database_path),
    "--image_path",
    str(images_path),
    "--output_path",
    str(sparse_path)
])

#
# Export Sparse PLY
#
run_command([
    "colmap",
    "model_converter",
    "--input_path",
    str(sparse_path / "0"),
    "--output_path",
    str(output_path / "colmap_sparse.ply"),
    "--output_type",
    "PLY"
])

#
# OpenSplat
#
run_command([
    "opensplat",
    str(project_path),
    "-o",
    str(output_path / "opensplat.ply")
])

logging.info("Processing complete.")